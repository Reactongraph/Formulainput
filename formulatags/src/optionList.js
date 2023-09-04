const options = [
  "Payment processing fee",
  "Payroll bonus G&A",
  "SUM",
  "Payroll bonus S&A",
  "Salary increase month",
  "Payroll bonus COGS",
  "Payroll bonus R&D",
  "Payroll COGS",
  "Payroll G&A",
  "Payroll R&D",
  "Payroll S&A",
  "Payroll S&M",
  "Company headcount",
  "Stripe contraction MRR",
  "Payroll tax S&M",
  "Payroll tax R&D",
  "Payroll tax G&A",
  "Payroll tax COGS",
  "Account balance: third party transfer",
  "Bonus payment month",
  "Stripe new customers",
  "Health insurance per employee",
  "Contractors: customer support",
  "Employee salary: customer support",
  "Health insurance expense",
  "Gross margin %",
];

const suggestions = options.map((name, index) => ({
  value: index,
  label: name,
}));

export { options, suggestions };
