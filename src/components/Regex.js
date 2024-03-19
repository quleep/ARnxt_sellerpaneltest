export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validGstin = new RegExp(
  "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
);
export const validAccountHolderName = new RegExp(
  "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})"
);
export const validAccountNumber = new RegExp("[0-9]{9,18}");
export const validIfsc = new RegExp("^[A-Z]{4}[0-9]{7}$");
