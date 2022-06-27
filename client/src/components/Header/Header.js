import React from 'react';
import styles from './Header.module.css';

const TopBar = ({username}) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<span className={styles.username}>
					{username}
				</span>
				<button className={styles.btn}>
					Выйти
				</button>
			</div>
	</nav>
)
}

export default TopBar;
