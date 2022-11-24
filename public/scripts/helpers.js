
const copyContent = (input) => {

  console.log("tesetINput", input)

  navigator.clipboard.writeText(input).then(() => {

    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });
}
