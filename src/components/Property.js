//modules
import React from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar} from 'react-icons/fa';

class Property extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            expanded: false,
            favorite: false
        };
    }

    handleDetails = (val) => {
        this.setState({expanded: val})
    }

    hydrateState = () =>{
        let key = this.props.info.property
        if(localStorage.hasOwnProperty(key)){
            let val = localStorage.getItem(key)
            val = (val === 'true');
            this.setState({favorite : val})
        }
    }

    componentDidMount(){
        this.hydrateState()
    }

    handleFav = (val) => {
        if(val){
            localStorage.setItem(this.props.info.property, "true");
        }else{
            localStorage.setItem(this.props.info.property, "false");
        }
        this.setState({favorite: val})
    }

    render(){
        let occupants = this.props.info.occupants.map(item => 
            <div>
                <div><b>name : </b> {item.name} <b>age : </b> {item.age}</div>
            </div> 
        )
        let stored_in_fav = localStorage.getItem(this.props.info.property)
        return(
            <Wrapper>
                <div>
                    <span onClick={() => this.handleDetails(!this.state.expanded)}>
                        <b>{this.props.info.property}</b>
                    </span>
                    <span onClick={() => this.handleFav(!this.state.favorite)}>
                            {this.state.favorite === true ? <FaStar /> : <FaRegStar /> }
                    </span>
                </div>
                    <Expandable expanded={this.state.expanded}>
                    {this.state.expanded && 
                        <div>
                            <div>
                                <b>Price Per Month :</b> {this.props.info.pricepermonth}
                            </div>
                            <div>
                                <b>Location</b> : {this.props.info.location}
                            </div>
                            <div>
                                <b>Occupants</b> : {occupants}
                            </div>
                        </div>
                    }
                    </Expandable>
            </Wrapper>
            )
        }
}

const Wrapper = styled.div`
    margin: 10px
`

const Expandable = styled.div`
    margin: 10px auto
    border-style: ${props => props.expanded ? 'solid' : 'hidden' };
    border-width: 2px;
    width: 30%;
     
`

export default Property