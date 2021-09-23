import React, {Component} from 'react'
import styled from  "styled-components"; 
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import {db} from "./firebase"; 
import {useSelector} from "react-redux"; 
import {selectCategoryIdArray} from "./slices/categoryidSlice";

class Dashboard extends Component { 
constructor(props) {

    /* 
    let sale_values = [this.props.categoryidarray.length];
    for(var i = 0;i<this.props.categoryidarray.length;i++){
        sale_values[i] = 0; 
    }
    for(var i = 0;i<this.props.categoryidarray.length;i++){
        db.collection("categories").doc(this.props.categoryidarray[i]).collection("Products")
        .get().then(snapshot => {
            snapshot.docs.map(doc => 
                sale_values[i] += doc.data().sales
            )
        })
    }
    */

    super(props);
    this.state = {
      config: {
        padding: '100px',
  backgroundColor: '#ecf2f6',
  graphset: [
    {
      type: 'bar',
      backgroundColor: '#fff',
      borderWidth: '10px',
      borderColor: '#dae5ec',
      width: '50%',
      height: '90%',
      x: '25%',
      y: '5%',
      title: {
        text: 'Sales for Categories',
        marginTop: '7px',
        marginLeft: '9px',
        backgroundColor: 'none',
        fontColor: '#707d94',
        fontFamily: 'Arial',
        fontSize: '11px',
        fontWeight: 'bold',
        shadow: false,
        textAlign: 'left'
      },
      plot: {
        tooltip: {
          padding: '5px 10px',
          backgroundColor: '#707e94',
          borderRadius: '6px',
          fontColor: '#fff',
          fontFamily: 'Arial',
          fontSize: '11px',
          shadow: false
        },
        animation: {
          delay: 500,
          effect: 'ANIMATION_SLIDE_BOTTOM'
        },
        barWidth: '33px',
        hoverState: {
          visible: false
        }
      },
      plotarea: {
        margin: '45px 20px 38px 45px'
      },
      scaleX: {
        values: ['Body/Suits', 'Underwear', 'Coats', 'Tops', 'Shoes', 'Accessories', 'Other'],
        guide: {
          visible: false
        },
        item: {
          paddingTop: '2px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '11px'
        },
        itemsOverlap: true,
        lineColor: '#d2dae2',
        maxItems: 9999,
        offsetY: '1px',
        tick: {
          lineColor: '#d2dae2',
          visible: false
        }
      },
      scaleY: {
        values: '0:6:3',
        guide: {
          rules: [
            {
              lineWidth: '0px',
              rule: '%i == 0'
            },
            {
              alpha: 0.4,
              lineColor: '#d2dae2',
              lineStyle: 'solid',
              lineWidth: '1px',
              rule: '%i > 0'
            }
          ]
        },
        item: {
          paddingRight: '5px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '10px'
        },
        lineColor: 'none',
        maxItems: 4,
        maxTicks: 4,
        tick: {
          visible: false
        }
      },
      series: [
        {
          values: [1, 2, 4, 3, 3, 2, 4, 0],
          styles: [
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#25a6f7'
            },
            {
              backgroundColor: '#ad6bae'
            },
            {
              backgroundColor: '#707d94'
            },
            {
              backgroundColor: '#f3950d'
            },
            {
              backgroundColor: '#e62163'
            },
            {
              backgroundColor: '#4e74c0'
            },
            {
              backgroundColor: '#9dc012'
            }
          ]
        }
      ]
    }, 
  ]
}
    }
  }
  render() {
    return (
          <ZingChart  data={this.state.config}/>
        
    );
  }
}

export default Dashboard

const DashboardContainer = styled.div`
margin-top: 50px;

`; 

