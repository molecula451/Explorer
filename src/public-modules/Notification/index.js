const initialState = {
  loading: true,
  loaded: false,
  error: false,
  count: 0,
  notifications: []
};

const LOAD_NOTIFICATIONS = 'notifications/LOAD_NOTIFICATIONS';
const LOAD_NOTIFICATIONS_SUCCESS = 'notifications/LOAD_NOTIFICATIONS_SUCCESS';
const LOAD_NOTIFICATIONS_FAIL = 'notifications/LOAD_NOTIFICATIONS_FAIL';

function loadNotifications(address) {
  return { type: LOAD_NOTIFICATIONS, address };
}

function loadNotificationsSuccess(notifications, count) {
  return {
    type: LOAD_NOTIFICATIONS_SUCCESS,
    notifications,
    count
  };
}

function loadNotificationsFail(error) {
  return { type: LOAD_NOTIFICATIONS_FAIL, error };
}

function NotificationReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NOTIFICATIONS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    }
    case LOAD_NOTIFICATIONS_SUCCESS: {
      const { notifications, count } = action;

      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        notifications,
        count
      };
    }
    case LOAD_NOTIFICATIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: true
      };
    }
    default:
      return state;
  }
}

export const actions = {
  loadNotifications,
  loadNotificationsSuccess,
  loadNotificationsFail
};

export const actionTypes = {
  LOAD_NOTIFICATIONS,
  LOAD_NOTIFICATIONS_SUCCESS,
  LOAD_NOTIFICATIONS_FAIL
};

export default NotificationReducer;
