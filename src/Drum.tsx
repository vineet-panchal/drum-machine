// Import necessary types
import { AudioClip } from "./types";

// Define the props for the Drum component
interface DrumProps {
  audioClip: AudioClip;
}

// Drum component
const Drum = ({ audioClip }: DrumProps) => {
  // Function to play the sound and update the display
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button
      className="drum"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <span className="shadow"></span>
      <span className="edge"></span>
      <div className="front">
        {/* Audio element for the drum sound */}
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
        <span className="text-display">{audioClip.keyTrigger}</span>
      </div>
    </button>
  );
};

export default Drum;
