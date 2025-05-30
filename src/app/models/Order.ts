import mongoose, { models } from "mongoose";

const LoanApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userEmail: { type: String, required: true },
  phone: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanPurpose: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  annualIncome: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  loanTerm: { type: Number, default: 12 },
  loanStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
  },
}, { timestamps: true });

export const Order = models?.Loan_Application || mongoose.model("Loan_Application", LoanApplicationSchema);