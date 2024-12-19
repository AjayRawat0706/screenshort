import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  captureScreenshot() {
    // Select the element to capture or the entire body
    const element = document.body; // Captures the entire screen

    // Capture the screenshot of the selected element
    html2canvas(element, {
      width: window.innerWidth, // Ensure it captures the full width for mobile
      height: window.innerHeight, // Ensure it captures the full height for mobile
      scale: window.devicePixelRatio, // Scales the canvas to match device resolution
      x: window.scrollX, // Handles scrolling for a better mobile screenshot
      y: window.scrollY
    }).then((canvas) => {
      // Convert the canvas to an image
      const img = canvas.toDataURL('image/png');

      // Optionally, display the screenshot
      const link = document.createElement('a');
      link.href = img;
      link.download = 'screenshot.png';
      link.click();
    });
  }
}
