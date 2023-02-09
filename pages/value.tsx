import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {Typography} from '@mui/material';
import MediaControlCard from './cards';


export default function Value() {
  const [ goalStage, setGoalStage ] = useState<boolean>(false); 
  const [ mystage, setMyStage ] = useState<boolean>(false);
  const [ otherstage, setOthersStage ] = useState<boolean>(false);

  // Goal
  const [ goal, setGoal ] = useState<string>('');

  // myStageの一時データ格納庫
  const [ want, setWant ] = useState<string>('');
  const [ should , setShould ] = useState<string>('');
  const [ can, setCan ] = useState<string>('');

  // フォームからの取得情報の処理のロジックはここに書いていく
  const sendDataGoal = async () => {
    setGoalStage(true);
  }

  const sendDataMine = async () => {
    // データ登録のロジックは後ほど追加
    setMyStage(true);
  }

  const sendDataOther = async () => {
    setOthersStage(true);
  }


  // MyStageのUIを崩さないように字数制限などをつけることで対応
  return (
    <>
      <div style={{ textAlign:"center", marginBottom:'30px'}}>
        {!goalStage ? (
          <>
            <h2 style={{color:"white", paddingTop:'20px', paddingBottom:'10px'}}>あなたの思いついたサービスはどんなものですか？</h2>
            <TextField
                label="アイデア入力"
                value={goal}
                multiline
                minRows="3"
                variant="filled"
                sx={{backgroundColor: "white", mb:2, width:'70ch'}}
                onChange={e => {setGoal(e.target.value)}}
              />
            <Button sx={{color:'pink', height: '50px', zIndex:10, variant: 'outlined', size: 'large'}} onClick={() => {sendDataGoal()}}>完了</Button>
            </>
        ):(
          <h2 style={{marginTop:'10px'}}>{goal}</h2>
        )}
      </div>

      <div style={{display:"flex", textAlign:"center"}}>
        <div style={{ width: "30%", height: "60vh", backgroundColor: "#696969", alignContent:"center", padding:3 }}>
          <h1 style={{color:"white", paddingTop:'40px', paddingBottom:'10px'}}>自分軸</h1>
          { !mystage ? (
            <>
              <div style={{marginTop:'30px', zIndex:1}}>
                <TextField
                  label="WANT : 自分がやりたいこと"
                  id='want'
                  value={want}
                  multiline
                  minRows="2"
                  maxRows="1"
                  variant="filled"
                  sx={{backgroundColor: "white", m:2, width:'40ch'}}
                  onChange={e => {setWant(e.target.value)}}
                />
                <TextField
                  label="SHOULD : 自分が(社会のために)すべきこと"
                  id='should'
                  value={should}
                  multiline
                  minRows="2"
                  maxRows="1"
                  variant="filled"
                  sx={{backgroundColor: "white", m:2, width:'40ch'}}
                  onChange={e => {setShould(e.target.value)}}
                />
                <TextField
                  label="CAN : 自分ができること"
                  id='can'
                  value={can}
                  multiline
                  minRows="2"
                  maxRows="1"
                  variant="filled"
                  sx={{backgroundColor: "white", m:2, width:'40ch'}}
                  onChange={e => {setCan(e.target.value)}}
                />
              </div>
              <Button sx={{color:'pink', height: '50px', zIndex:10, variant: 'outlined', size: 'large'}} onClick={(e) => {sendDataMine()}}>決定</Button>
            </>
          ) : (
            <div style={{marginTop:'100px'}}>
              <h2>「{want}」ために、</h2>
              <h2>「{can}」を活かして、</h2>
              <h2>「{should}」</h2>
            </div>
          )}
        </div>

        <div style={{ width: "70%", height: "60vh", backgroundColor: "red", alignContent:"center", padding:3 }}>
          <h1 style={{color:"white", paddingTop:'5px', paddingBottom:'10px'}}>他人軸</h1>
          { !otherstage ? (
            <>
            <div>
              <TextField
                label="WHAT : あなたのサービスはどんな問題orニーズを解決するor満たすものですか？"
                multiline
                minRows="2"
                maxRows="3"
                variant="filled"
                sx={{backgroundColor: "white", m:2, width:'70ch'}}
              />
              <TextField
                label="WHO : その問題orニーズを持っている人はどんな人ですか？"
                multiline
                minRows="2"
                maxRows="3"
                variant="filled"
                sx={{backgroundColor: "white", m:2, width:'70ch'}}
              />
              <TextField
                label="HWO : どうやってその問題orニーズを解決or満たしますか？"
                multiline
                minRows="2"
                maxRows="3"
                variant="filled"
                sx={{backgroundColor: "white", m:2, width:'70ch'}}
              />
              {/* <TextField
                label="それは同じ目的の他のソリューションと何が違いますか？"
                multiline
                minRows="2"
                maxRows="3"
                variant="filled"
                sx={{backgroundColor: "white", m:2, width:'70ch'}}
              /> */}
            </div>
              <Button sx={{color:'pink', height: '50px', zIndex:10, variant: 'outlined', size: 'large'}} onClick={(e) => {sendDataOther()}}>決定</Button>
            </>
          ):(
            <>
              <div style={{}}>
                <MediaControlCard picked={'Segmentation'} />
                <div>
                  <MediaControlCard picked={'Segmentation'} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}