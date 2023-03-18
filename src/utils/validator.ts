export const validateFormInput = (
  input: { [key: string]: string },
  rule: { [key: string]: (value: string) => string }
) => {
  const errors: { [key: string]: string } = {}
  Object.keys(input).forEach((key) => {
    if (!input[key]) {
      errors[key] = "This field is required"
    } else {
      const errorOutput = rule[key](input[key])
      if (errorOutput) errors[key] = errorOutput
    }
  })
  return errors
}

export const blogCreationValidation = {
  title: (value: string) =>
    value.length <= 300 ? "" : "Title must be less than 300 characters",
  body: (value: string) =>
    value.length < +2000 ? "" : "Body must be less than 2000 characters",
  dateCreated: (value: string) => "",
  author: (value: string) =>
    typeof value === "string" ? "" : "Author must be a string",
}
