import React, { useRef, useEffect, useState, useContext, createContext } from 'react';
// import './App.css';
import cytoscape, { GridLayoutOptions, CircleLayoutOptions, Position, EventHandler } from 'cytoscape';
import cyStyle from '../cy-style.json';
import DataTable from './datatable';
import MediaControlCard from './cards';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Apps() {
  const [card, setCard] = useState<string>('');
  const el =  useRef(null);

  // handler((evt:EventHandler):void => {
  //   const tgt = evt.target;
  // })

  useEffect(() => {
    const container = el.current! as HTMLDivElement;
    //const context = useContext(pageSet);

    var cy = cytoscape({
      container: container,
      layout: {
        name: 'grid',
        columns: 5
      } as GridLayoutOptions,
      style: cyStyle as unknown as cytoscape.Stylesheet[],
      //elements: D as unknown as cytoscape.ElementsDefinition
    });

    cy.ready(function(){
      cy.add([
        { group: 'nodes', data: { id: 'n0' }, position: { x: 450, y: 400 }, style:{type: "トヨタ"} },
        { group: 'nodes', data: { id: 'n1' }, position: { x: 200, y: 200 }, style:{type: "テスラ"} },
        { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
        { group: 'nodes', data: { id: 'n2' }, position: { x: 200, y: 600 }, style:{type: "ホンダ"} },
        { group: 'edges', data: { id: 'e1', source: 'n0', target: 'n2' } },
        { group: 'nodes', data: { id: 'n3' }, position: { x: 700, y: 200 }, style:{type: "BMW"} },
        { group: 'edges', data: { id: 'e2', source: 'n0', target: 'n3' } },
        { group: 'nodes', data: { id: 'n4' }, position: { x: 700, y: 600 }, style:{type: "日産"} },
        { group: 'edges', data: { id: 'e3', source: 'n0', target: 'n4' } }
      ]);

      //cy.on('tap', 'nodes', handler())
      cy.on('tap', 'ndoes', function(evt){
        var target = evt.target;
        if(target._private.group === 'nodes') {
          console.log("check!", target._private)
          setCard(target._private.data.id);
          // 関数自体は動くことを確認。GrobalでuseStateで管理→Cardsに情報を渡す？　
          // ただ今回に関しては特に何もしなくても、同じファイル内で完結しているから普通のUSeStateでオッケー！
          console.log("card", card)
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
          <h2 style={{color:"#4682b4", margin:"3ch", textAlign:"center"}}>競合分析</h2>
          <div style={{ marginRight:'5ch' }}>
          <DataTable/>
          </div>
          <div style={{color:"#4682b4", margin:"3ch", textAlign:"center"}}>
            <ArrowDropDownIcon sx={{fontSize:'150px'}}/>
          </div>
       </div>
    </div>
  );
}

//実際に発火させるにはGlobalのuseStateが必要

export default Apps;