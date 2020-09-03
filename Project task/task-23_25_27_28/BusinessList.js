import React from 'react';
import './BusinessList.css';
import Business from './components/Businness';


class BusinessList extends  React.Component {
    render() {
        return (
            <div className="BusinessList">

                {
                    this.props.businesses.map(business => {
                        return (
                            <Business key={business} business={business}/> 
                        );
                    }
                    )
                };

            </div>
        )
    }
}

export { BusinessList };