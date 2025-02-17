```javascript
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image-picker';

const MyImage = ({ source }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(source);
        if (!response.ok) {
          // Handle error, e.g., 404
          throw new Error(`Image loading failed: ${response.status}`);
        }
        const imageUri = await response.blob();
        setImageUri(URL.createObjectURL(imageUri));
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [source]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading image: {error.message}</div>;
  }
  return (
    <Image
      style={{ width: 200, height: 200 }}
      source={{ uri: imageUri }}
    />
  );
};

export default MyImage;
```