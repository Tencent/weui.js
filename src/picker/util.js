/*
* Tencent is pleased to support the open source community by making WeUI.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

export const depthOf = (object) => {
    if (!object) return 1;

    let depth = 1;
    if (object.children && object.children.length) {
        object.children.forEach((child) => {
            const childDepth = depthOf(child) + 1;
            if (childDepth > depth) depth = childDepth;
        });
    }
    return depth;
};

export const maxDepthOf = (items) => {
    let depth = 1;
    (items || []).forEach((item) => {
        const itemDepth = depthOf(item);
        if (itemDepth > depth) depth = itemDepth;
    });
    return depth;
};
