switch (choice) {
  case OPTION_ONE:
    performOptionOneAction();
    break;
  case OPTION_TWO:
    performOptionTwoAction();
    break;
  // Assuming there are more options, they would be added here.
  case OPTION_THREE:
    performOptionThreeAction();
    break;
  case OPTION_FOUR:
    performOptionFourAction();
    break;
  // Add additional cases as needed.
  default:
    performDefaultAction();
}
