"use client";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




const StyledNode = ({children}) => (
    <div
      style={{
        padding: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        border: '1px solid #ff0000',
      }}
    >
        {children}
    </div>
  )
/*const treeData = [
    {
        id : '1',
        text : 'xdbcjhsdvjcsdf',
        diamond: false,
        children:[
            {
                id:'2',
                text:'dvdfjvbfd',
                diamond: false,
                children:[
                    {
                        id:'3',
                        text:'jkvbdfhv',
                        diamond: false,
                        children:[
                            {
                                id:'4',
                                text:'dbvhd',
                                diamond: false,
                            }
                        ]
                    },
                    {
                        id:'5',
                        text:'grgrgrefg',
                        diamond: false,
                        children:[
                            {
                                id:'4',
                                text:'dbvhd',
                                diamond: false,
                            }
                        ]
                    },{
                      id:'6',
                      text:'grgrgrefg',
                      diamond: false,
                      children:[
                          {
                              id:'4',
                              text:'dbvhd',
                              diamond: false,
                          }
                      ]
                  }
  
                ]
            }
        ]
    }
  ]
  */
  
  
  const treeRendering = (treeData) => {

    
    return (
        <>
            {
                treeData.map((item)=>                
                    <TreeNode  key={item.uniqueKey} className={item.data+item.uniqueKey}  label= {<StyledNode>{(item.path != "") ? "Decisión:" : "" }  { item.path }<br/>Data: {item.data}</StyledNode>}>
                        
                        
                        {
                            item.children && item.children.length ?
                            treeRendering(item.children)
                            :''
                        }
                    </TreeNode>
                )            
                
            }
        </>
    )
  }

export default function HomePage() {


    
    const [loader, setLoader] = useState(false);
const downloadPDF = () =>{
    const capture = document.querySelector('.css-1bioabq');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        //start of testing
        var dlLink = document.createElement('a');
        dlLink.download = 'test.png';
        dlLink.href = imgData;
        dlLink.dataset.downloadurl = ['img/png', dlLink.download, dlLink.href].join(':');
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);

        //end of testinfg
      //const doc = new jsPDF('p', 'mm', 'a4');
      //const componentWidth = 500;
      //const componentWidth = doc.internal.pageSize.getWidth();
      //const componentHeight = doc.internal.pageSize.getHeight();
      //doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      //doc.save('tree.pdf');
    })
  }

    const initialState = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
      ];
    let oldArray = [1];
    let [externalArray, setExternalArray] = useState(initialState);
    let [treeData, setTreeData] = useState();
    useEffect(() => {
        const fetchData = async () =>{
          
          try {
            const {data: response} = await Axios.get('http://localhost:4000/sendTree');
            setTreeData(response);
            //setExternalArray( current => [...current,treeData] ); 
          } catch (error) {
            console.error(error.message);
          }
          
        }
    
        fetchData();
      }, []);

      //console.log(treeData.tree);   

    /*return(
        <>
            Arbol
        </>
    );*/
    return(

        <>{
            treeData === undefined ? <h1>Problem</h1> : 
            <>
                <Tree className="actual-tree" 
                lineWidth={'2px'}
                lineColor={'green'}
                lineBorderRadius={'10px'}
                label={<StyledNode></StyledNode>}
            >
                {treeRendering(treeData.tree)}
            </Tree>
            <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
              <br />

              <a className='existing-image-id'></a>
          </>
        }</>
    );
}