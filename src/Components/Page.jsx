import React, { useState } from 'react';
import MyPhoto from '../Components/img/ok.jpeg';

const styles = {
  container: {},
  photoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  leftPhoto: {
    width: '100%',
    maxWidth: '100%',
    marginBottom: '100px',
  },
  certificationText: {
    position: 'absolute',
    top: '40%',
    right: '55%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30px',
    textAlign: 'center',
  },
  features: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align features to the left
    marginLeft: '20px', // Add margin to push features to the left
  },
  feature: {
    margin: '0 10px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  featureUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: 'red',
    transform: 'scaleX(0)',
    transformOrigin: 'bottom left',
    transition: 'transform 0.3s',
  },
  videoSection: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  video: {
    width: '80%',
  },
  descriptions: {
    marginTop: '20px',
    textAlign: 'center',
  },
  description: {
    margin: '20px 0',
  },
  line: {
    width: '80%', // Initial width, will be dynamically adjusted
    height: '2px',
    backgroundColor: 'red',
    margin: '20px 0',
    transition: 'width 0.3s', // Transition for smooth animation
  },
};

const Page = () => {
  const [selectedFeature, setSelectedFeature] = useState('About');

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div style={styles.container}>
      <div style={styles.photoSection}>
        <img src={MyPhoto} alt="Company" style={styles.leftPhoto} />
        <div style={styles.certificationText}>
          UI/UX Design <br />
          Certification
        </div>
        <div style={styles.features}>
          <div
            style={{
              ...styles.feature,
              color: selectedFeature === 'About' ? 'red' : 'black',
            }}
            onClick={() => handleFeatureClick('About')}
          >
            About
            <div
              style={{
                ...styles.featureUnderline,
                transform: selectedFeature === 'About' ? 'scaleX(1)' : 'scaleX(0)',
              }}
            ></div>
          </div>

          <div
            style={{
              ...styles.feature,
              color: selectedFeature === 'Assessment' ? 'red' : 'black',
            }}
            onClick={() => handleFeatureClick('Assessment')}
          >
            Assessment
            <div
              style={{
                ...styles.featureUnderline,
                transform: selectedFeature === 'Assessment' ? 'scaleX(1)' : 'scaleX(0)',
              }}
            ></div>
          </div>

          <div
            style={{
              ...styles.feature,
              color: selectedFeature === 'Report' ? 'red' : 'black',
            }}
            onClick={() => handleFeatureClick('Report')}
          >
            Report
            <div
              style={{
                ...styles.featureUnderline,
                transform: selectedFeature === 'Report' ? 'scaleX(1)' : 'scaleX(0)',
              }}
            ></div>
          </div>
        </div>
        {/* Horizontal line below the selected feature */}
        <div style={{ ...styles.line, width: selectedFeature === 'About' ? '80%' : '0' }}></div>
      </div>

      <div style={styles.videoSection}>
        <iframe
          title="Company Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allowFullScreen
          style={styles.video}
        ></iframe>

        <div style={styles.descriptions}>
          <div style={styles.description}>About Perusahaan</div>
          <div style={styles.description}>Penjelasan Video</div>
          <div style={styles.description}>Penjelasan Modul</div>
          <div style={styles.description}>Penjelasan Deskripsi</div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'red',
          margin: '20px 0',
        }}
      ></div>
    </div>
  );
};

export default Page;
