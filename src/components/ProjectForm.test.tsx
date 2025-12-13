import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "./ProjectForm";
import { submitProject } from "@/lib/submitProject";

// Mock dependencies
vi.mock("@/lib/submitProject");
vi.mock("@clerk/clerk-react", () => ({
  useUser: () => ({ user: { id: "test-user-id" } }),
}));
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

describe("ProjectForm", () => {
  it("renders form fields", () => {
    const onSuccess = vi.fn();
    render(<ProjectForm serviceType="web-development" onSuccess={onSuccess} />);

    expect(screen.getByLabelText(/project name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(<ProjectForm serviceType="web-development" onSuccess={onSuccess} />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(submitButton);

    // Should show validation errors
    await waitFor(() => {
      expect(screen.getByText(/project name must be at least 3 characters/i)).toBeInTheDocument();
    });
  });

  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    vi.mocked(submitProject).mockResolvedValue({ success: true });

    render(<ProjectForm serviceType="web-development" onSuccess={onSuccess} />);

    // Fill form
    await user.type(screen.getByLabelText(/project name/i), "Test Project");
    await user.type(screen.getByLabelText(/company/i), "Test Company");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/phone/i), "+1234567890");
    await user.type(screen.getByLabelText(/description/i), "This is a test project description that is long enough to pass validation");
    await user.type(screen.getByLabelText(/key features/i), "Feature 1, Feature 2, Feature 3");

    // Submit
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(submitProject).toHaveBeenCalled();
    });
  });
});
