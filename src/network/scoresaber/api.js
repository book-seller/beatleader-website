import {substituteVars} from '../../utils/format'

export const SS_API_HOST = 'https://new.scoresaber.com';
export const SS_API_URL = `${SS_API_HOST}/api`;

export const SS_API_PLAYER_INFO_URL = SS_API_URL + '/player/${playerId}/full';
export const SS_API_RECENT_SCORES_URL = SS_API_URL + '/player/${playerId}/scores/recent/${page}';
export const SS_API_TOP_SCORES_URL = SS_API_URL + '/player/${playerId}/scores/top/${page}';

const fetchJson = async (url, options) => fetch(url, options).then(response => response.json());

const fetchScores = async (baseUrl, playerId, page = 1, signal = null) => fetchJson(substituteVars(baseUrl, {playerId, page}), {signal})

export default {
  player: async (playerId, signal = null) => fetchJson(substituteVars(SS_API_PLAYER_INFO_URL, {playerId}), {signal}),
  recentScores: async (playerId, page = 1, signal = null) => fetchScores(SS_API_RECENT_SCORES_URL, playerId, page, signal),
  topScores: async (playerId, page = 1, signal = null) => fetchScores(SS_API_TOP_SCORES_URL, playerId, page, signal),
}
