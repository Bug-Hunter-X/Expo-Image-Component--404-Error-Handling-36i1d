# Expo Image Component 404 Error Handling

This repository demonstrates a bug in the Expo `Image` component's handling of 404 errors when loading images from remote URLs.  The component doesn't provide clear error feedback, leading to unexpected behavior in the application.

## Bug Description

When an image URL provided to the `Image` component returns a 404 error, the component renders nothing. There are no error events or callbacks triggered to indicate the failure, making it difficult to debug or implement fallback mechanisms.

## Solution

A robust solution involves using a custom error handling mechanism that checks the image loading status and provides a suitable alternative when an error occurs (e.g., displaying a placeholder image).