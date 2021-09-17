import React from 'react';
import Search from './components/home/search';
import Groups from './components/home/groups';
import Recents from './components/home/recents';
import Friends from './components/home/friends';
import RecentCall from './components/home/recent-call';


const Home = () => {
	return(
		<div className="home">

		<div className = 'colm-sec'>
		 	<Search/>

		    <Groups/>

		    <Recents/>
		</div>
		      
		    <Friends/>

		    <RecentCall/>

		</div>
		)
}


export default Home;