/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import _ from 'lodash';
import log from 'log';
import ConditionalStatement from './conditional-statement';

/**
 * Class for if conditions in ballerina. Extended from Conditional-Statement
 * @constructor
 */
class ElseIfStatement extends ConditionalStatement {
    constructor(condition, statements) {
        super();
        if(!_.isNil(condition)){
            this._condition = condition;
        }
        this._statements = statements || [];
        this.type = "ElseIfStatement";
    }

    setCondition(condition, options) {
        if(!_.isNil(condition)){
            this.setAttribute('_condition', condition, options);
        }
    }

    getCondition() {
        return this._condition;
    }
}

export default ElseIfStatement;

