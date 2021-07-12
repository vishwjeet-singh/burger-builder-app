import React,{Component} from 'react';
import Aux from '../../Hoc/Auxilliary';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state = {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false });
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }
    render(){
        return (
            <Aux>
                <Toolbar drawertoggleclicked = {this.sideDrawerToggleHandler}/>
                    <SideDrawer show= {this.state.showSideDrawer} open = {this.state.showSideDrawer} closed ={this.sideDrawerClosedHandler}/>
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
            </Aux>
        );
    }
    
};

export default Layout;