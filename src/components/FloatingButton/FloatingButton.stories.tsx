import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import FloatingButton from "./FloatingButton";

storiesOf("FloatingButton", module)
  .addDecorator(withKnobs)
  .add("Add", () => (
    <FloatingButton
      color={text("color", "primary")}
      onClick={action("clicked")}
    >
      <AddIcon />
    </FloatingButton>
  ))
  .add("Edit", () => (
    <FloatingButton
      color={text("color", "secondary")}
      onClick={action("clicked")}
    >
      <EditIcon />
    </FloatingButton>
  ));
