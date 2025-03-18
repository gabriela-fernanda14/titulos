import styles from "./section.module.css";

const Section = () => {
    return (
        <section className={styles.newTrophies}>
        <h2>Campeonatos Brasileiros</h2>
        <div className={styles.trophiesGrid}>
          <div className={styles.trophy}>
            <div className={styles.trophyCover}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                alt="Troféu do Campeonato Brasileiro 2017"
              />
            </div>
            <div className={styles.trophyInfo}>
              <h3>Campeonato Brasileiro</h3>
              <p className={styles.year}>2017</p>
              <p className={styles.details}>7º título brasileiro</p>
              <button className={styles.detailsButton}>Ver Detalhes</button>
            </div>
          </div>
          <div className={styles.trophy}>
            <div className={styles.trophyCover}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                alt="Troféu do Campeonato Brasileiro 2015"
              />
            </div>
            <div className={styles.trophyInfo}>
              <h3>Campeonato Brasileiro</h3>
              <p className={styles.year}>2015</p>
              <p className={styles.details}>6º título brasileiro</p>
              <button className={styles.detailsButton}>Ver Detalhes</button>
            </div>
          </div>
          <div className={styles.trophy}>
            <div className={styles.trophyCover}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                alt="Troféu do Campeonato Brasileiro 2011"
              />
            </div>
            <div className={styles.trophyInfo}>
              <h3>Campeonato Brasileiro</h3>
              <p className={styles.year}>2011</p>
              <p className={styles.details}>5º título brasileiro</p>
              <button className={styles.detailsButton}>Ver Detalhes</button>
            </div>
          </div>
        </div>
      </section>
    )

}