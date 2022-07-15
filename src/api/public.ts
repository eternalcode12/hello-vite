/**
 * author: zyj
 * date: 2022-07-15
 * description: request public api
 */

import axios from '@/utils/axios'

/**
 * get public article list
 * @param params request params
 * @returns Promise<any>
 */
export function getArticleAll(params?: any) {
  return axios({
    url: '/article/all',
    method: 'GET',
    params
  })
}

/**
 * get public category list
 * @param params request params
 * @returns Promise any
 */
export function getCategoryAll(params?: any) {
  return axios({
    url: '/category/all',
    method: 'GET',
    params
  })
}