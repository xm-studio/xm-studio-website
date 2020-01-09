import React from 'react';
import { Row} from 'react-bootstrap';
import '../../src/app.css';

class BookShelf extends React.Component {
    render (){
        return(
            <Row>
            <div className="book-shelf">

            </div> 
            <div className="book-shelf-name">
                {this.props.shelfName}
            </div>
            </Row>
                
        );
    }
}

export default BookShelf;