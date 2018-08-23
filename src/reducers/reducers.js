/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {combineReducers} from 'redux'
import * as actions from '../actions/actions'

const initialState = {
  charge: {
    name: '조대리',
    companyName: 'A사',
    bankName: '은행A',
    account: '18414-53251'
  },
  payment: {
    name: '서부장',
    companyName: 'B사',
    bankName: '은행B',
    account: '69793-10110'
  },
  productDetails: {
    type: "None",
    quantity: 0,
    pricePerUnit: 0,
    total: 0
  },
  rules: [
    {ruleText: "The correct quantity of product has been delivered."},
    {ruleText: "The product was received within 30 days of the placement of the order."},
    {ruleText: "The product is not damaged and functions as expected."}
  ]
}

const getLetterInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CHARGE:
      return { ...state, charge: action.payload };
    case actions.GET_PAYMENT:
      return { ...state, payment: action.payload };
    case actions.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case actions.GET_RULES:
      return { ...state, rules: [...state.rules, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
   getLetterInputReducer
})

export default rootReducer;
