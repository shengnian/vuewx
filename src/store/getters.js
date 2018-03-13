const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  errorLogs: state => state.errorLog.logs
}

export default getters
