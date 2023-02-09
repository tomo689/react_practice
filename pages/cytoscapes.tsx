import React, { useRef, useEffect, useState } from 'react';
// import './App.css';
import cytoscape, { GridLayoutOptions } from 'cytoscape';
import cyStyle from '../cy-style.json';
import DataTable from './datatable';
import MediaControlCard from './cards';


function Apps() {
  const [card, setCard] = useState<string>('');
  const el =  useRef(null);

  useEffect(() => {
    const container = el.current! as HTMLDivElement;

    var cy = cytoscape({
      container: container,
      layout: {
        name: 'grid',
        columns: 5
      } as GridLayoutOptions,
      style: cyStyle as unknown as cytoscape.Stylesheet[],
    });

    cy.ready(function(){
      cy.add([
        { group: 'nodes', data: { id: 'companyA' }, position: { x: 450, y: 400 }, style:{type: "トヨタ"} },
        { group: 'nodes', data: { id: 'comapnyB' }, position: { x: 200, y: 200 }, style:{type: "テスラ"} },
        { group: 'edges', data: { id: 'e0', source: 'companyA', target: 'comapnyB' } },
        { group: 'nodes', data: { id: 'comapnyC' }, position: { x: 200, y: 600 }, style:{type: "ホンダ"} },
        { group: 'edges', data: { id: 'e1', source: 'companyA', target: 'comapnyC' } },
        { group: 'nodes', data: { id: 'comapnyD' }, position: { x: 700, y: 200 }, style:{type: "BMW"} },
        { group: 'edges', data: { id: 'e2', source: 'companyA', target: 'comapnyD' } },
        { group: 'nodes', data: { id: 'comapnyE' }, position: { x: 700, y: 600 }, style:{type: "日産"} },
        { group: 'edges', data: { id: 'e3', source: 'companyA', target: 'comapnyE' } }
      ]);

      cy.on('tap', 'ndoes', function(evt){
        var target = evt.target;
        if(target._private.group === 'nodes') {
          setCard(target._private.data.id);
        }
      });
    });
    return(() => {
      cy.destroy();
    })
  }, [])

  return (
    <div style={{display:"flex"}}>
       <div ref={el} style={{ width: "60%", height: "100vh", backgroundColor: "gray" }} />
       <div style={{ width: "40%", height: "100vh", backgroundColor: "#696969", alignContent:"center" }}>
          <MediaControlCard picked={card} />
          <h2 style={{color:"#1e90ff", paddingTop:'2.5ch', margin:"1ch", textAlign:"center", fontSize:'30px'}}>競合分析</h2>
          <div style={{ marginRight:'5ch' }}>
          <DataTable/>
          </div>
       </div>
    </div>
  );
}

//実際に発火させるにはGlobalのuseStateが必要

export default Apps;