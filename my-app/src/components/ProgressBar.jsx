import { Progress } from "flowbite-react";

export default function ProgressBar({value}) {
  return (
    <Progress
      progress={value}
      progressLabelPosition="inside"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}