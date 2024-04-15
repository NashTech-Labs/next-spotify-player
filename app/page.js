import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <iframe
            title="Spotify Player"
            src="https://open.spotify.com/embed/track/7xGfFoTpQ2E7fRF5lN10tr" // Replace with your Spotify Embed URL
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
