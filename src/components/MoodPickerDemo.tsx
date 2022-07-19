import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue( "confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToThinking = () => {
    queueRerenderWithNewMoodValue("thinking");
  };

  const handleMoodChangeToHoly = () => {
    queueRerenderWithNewMoodValue("holy");
  };

  const handleMoodChangeToCool = () => {
    queueRerenderWithNewMoodValue("cool");
  };

return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToThinking}>🧐</button>
      <button onClick={handleMoodChangeToHoly}>😇</button>
      <button onClick={handleMoodChangeToCool}>😎</button>
    </>
  );
}

export default MoodPickerDemo;
