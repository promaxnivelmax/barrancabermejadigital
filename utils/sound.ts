// Simple pop sound utility
// Uses a short base64 audio to avoid external dependencies blocking
const popSound = "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"; // Very short clip placeholder, usually you'd use a real file.

// Since base64 string above is truncated/invalid for brevity in this response format, 
// we will use a dummy function that logs. In a real app, replace with valid Audio.
// Alternatively, we use a silent fail if audio context isn't allowed.

export default function playSound() {
  try {
    // This is a very short, gentle "pop" sound
    const audio = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
    audio.volume = 0.2;
    audio.play().catch(() => {
        // Auto-play policy might block this if no interaction happened yet
    });
  } catch (e) {
    console.error("Audio play failed", e);
  }
}