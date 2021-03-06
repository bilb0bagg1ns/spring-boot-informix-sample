'use strict';

/*
app.js is the proverbial public static void main() of our JavaScript application. 

*/

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
// end::vars[]

//tag::app[]

/*
 * In essence, app.js is the proverbial public static void main() of our JavaScript application. 
 */
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {businessEntities: []};
	}

	componentDidMount() {
//		client({method: 'GET', path: '/api/businessEntities/19981215793'}).done(response => {
		client({method: 'GET', path: '/api/businessEntities/search/findByPartialEntityName?entityName=Hope'}).done(response => {
			this.setState({businessEntities: response.entity._embedded.businessEntities});
		});
	}

	render() {
		return (
			<BusinessEntitiesList businessEntities={this.state.businessEntities}/>
		)
	}
}
//end::app[]

//tag::businessEntities-list[]
class BusinessEntitiesList extends React.Component{
	render() {
		var businessEntities = this.props.businessEntities.map(businessEntity =>
			<BusinessEntity key={businessEntity._links.self.href} businessEntity={businessEntity}/>
		);
		return (
			<table id="busentities">
				<tbody>
					<tr>
					<th>Entity Id</th>
					<th>Entity Name</th>
					<th>Entity Type</th>
					</tr>
					{businessEntities}
				</tbody>
			</table>
		)
	}
}
// end::businessEntities-list[]

// tag::businessEntity[]
class BusinessEntity extends React.Component{
	render() {
		return (
			<tr>
			<td>{this.props.businessEntity.entityId}</td>
			<td>{this.props.businessEntity.entityName}</td>
			<td>{this.props.businessEntity.entityType}</td>
			</tr>
		)
	}
}
// end::businessEntity[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

