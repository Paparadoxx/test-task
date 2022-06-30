import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './Header.module.css';
import { logout } from '../../store/slices/authSlice';

const Header = () => {

	const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<span className={styles.username}>
					{currentUser.username}
				</span>
				<button 
					onClick={() => dispatch(logout())}
					className={styles.btn}
				>
					выйти
				</button>
			</div>
	</nav>
)
}

export default Header;
