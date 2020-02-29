import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import React from 'react'
import Grid from '@material-ui/core/Grid'

import Link from '../../common/Link'

const Home = () => (
  <section>
		<Grid container spacing={ 4 }>
			<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
				<div style={{ backgroundColor: 'purple' }}>
					<Link to='/login'>Go to login page</Link>
				</div>
				
			</Grid>
			<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
				<div style={{ backgroundColor: 'purple' }}>
					<Link to='/login'>Go to login page</Link>
				</div>
				
			</Grid>
			<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
				<div style={{ backgroundColor: 'purple' }}>
					<Link to='/login'>Go to login page</Link>
				</div>
				
			</Grid>
			<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
				<div style={{ backgroundColor: 'purple' }}>
					<Link to='/login'>Go to login page</Link>
				</div>
				
			</Grid>
		</Grid>
	</section>
)



export default Home;
