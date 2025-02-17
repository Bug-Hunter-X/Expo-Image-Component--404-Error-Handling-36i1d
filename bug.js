This bug occurs when using the Expo `Image` component with a remote image URL that returns a 404 error.  The component fails to gracefully handle the error, resulting in an empty space or a blank screen where the image should be.  Additionally, it doesn't trigger any standard error events, making debugging difficult.  This is unexpected as other image loading libraries generally provide better error handling and feedback.