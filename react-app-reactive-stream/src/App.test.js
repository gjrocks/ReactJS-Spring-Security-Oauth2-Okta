import React from 'react';
//import { render } from '@testing-library/react';
import App from './App';
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils'
//import ReactTestUtil from 'react-dom/test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import {getAPIData} from './api';
import axios from 'axios';
jest.mock('axios');


let container;

beforeEach(() => {
  //let us create a div
  container=document.createElement("div");
  //add the div to document body
  document.body.appendChild(container);

});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container=null;
});

test('See if the button and the test box are present', async () => {

  const responseData={data :{message: "Error : 15", messageID: 15, tranactionID: "Tranaction ID : 15"}};
  axios.get.mockResolvedValue(responseData);

 await act( async()=>{
   render(<App />, container);
  });

  const button=container.querySelector("#mybtn");
  const errorCodeTxt=container.querySelector("#errornum");
  const messageTxt=container.querySelector("#message");
  expect(messageTxt).toBeDefined();
  expect(errorCodeTxt).toBeDefined();
  expect(button).toBeDefined();
  expect(button.value).toBe("Error");
  errorCodeTxt.value=15;
 
  ReactTestUtils.Simulate.change(errorCodeTxt);
  await act(async ()=>{
   
    button.dispatchEvent(new MouseEvent('click',{bubbles:true}));
  });
  expect(errorCodeTxt.value).toBe("15");
  expect(messageTxt.textContent).toBe("Error : 15");
  console.log(messageTxt.innerHTML);


  
});
//test a async function from service layer
test('fetch Data  and show', async() => {
  const id=15;
  const responseData={data :{message: "Error : 15", messageID: 15, tranactionID: "Tranaction ID : 15"}};
  axios.get.mockResolvedValue(responseData);
  const data=await getAPIData(id);
  //expect(data).toEqual({message:"Error : "+id});
  console.log(data);
});