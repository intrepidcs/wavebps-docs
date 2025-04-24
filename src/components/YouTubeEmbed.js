import React from 'react';

export default function YouTubeEmbed({ videoId, caption }) {
  return (
    <div style={{ maxWidth: '100%', marginBottom: '2rem' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      {caption && (
        <div style={{ textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic', color: '#666' }}>
          {caption}
        </div>
      )}
    </div>
  );
}
