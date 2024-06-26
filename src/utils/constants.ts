import { IEvent } from "@/types/Event";

export const CACHE_INVALIDATION_TIME = 360000 // 6 minutes

export const MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

export const LetterGradientDict = {
  A: "linear-gradient(to bottom right, #ec8b5d, #be39c8)",
  B: "linear-gradient(to bottom right, #a3c4fe, #2f80ed)",
  C: "linear-gradient(to bottom right, #b5e48c, #66a64c)",
  D: "linear-gradient(to bottom right, #ffb997, #ff6e97)",
  E: "linear-gradient(to bottom right, #ffd369, #ffb199)",
  F: "linear-gradient(to bottom right, #a18cd1, #6f4e9b)",
  G: "linear-gradient(to bottom right, #9ad5ca, #2eb872)",
  H: "linear-gradient(to bottom right, #f7a6a3, #ef5b9c)",
  I: "linear-gradient(to bottom right, #a6e3e9, #78cdd1)",
  J: "linear-gradient(to bottom right, #f6d365, #fda085)",
  K: "linear-gradient(to bottom right, #ff18ff, #f0f0f0)",
  L: "linear-gradient(to bottom right, #cfd9df, #e2ebf0)",
  M: "linear-gradient(to bottom right, #ffafbd, #ffc3a0)",
  N: "linear-gradient(to bottom right, #d7d2cc, #304352)",
  O: "linear-gradient(to bottom right, #9293ff, #12b5ff)",
  P: "linear-gradient(to bottom right, #c9d6ff, #e2e2e2)",
  Q: "linear-gradient(to bottom right, #ffecd2, #fcb69f)",
  R: "linear-gradient(to bottom right, #fbc2eb, #a6c1ee)",
  S: "linear-gradient(to bottom right, #f093fb, #f5576c)",
  T: "linear-gradient(to bottom right, #f77062, #fe5196)",
  U: "linear-gradient(to bottom right, #f317e9, #e3eeff)",
  V: "linear-gradient(to bottom right, #bd11c7, #2c9950)",
  W: "linear-gradient(to bottom right, #ffefba, #ffffff)",
  X: "linear-gradient(to bottom right, #bfcfc7, #fc3e50)",
  Y: "linear-gradient(to bottom right, #f317e9, #e3eeff)",
  Z: "linear-gradient(to bottom right, #000000, #2c3e50)",
};

export const DummyEvents: IEvent[] = [
  {
    id: "evt_15B56WILKR5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_1A234BCDEF567",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_ABCD1234EFGH",
      object: "event_action",
      name: "user.password_reset_requested",
    },
    target_id: "user_XYZ9876ABCD",
    target_name: "kareem@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-02-15T08:45:22.123Z",
    metadata: {
      redirect: "/password-reset",
      description: "Password reset requested.",
      x_request_id: "req_ABCD5678EFGH",
    },
  },
  {
    id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded"
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H"
    }
  },
  {
    id: "evt_5A234BCDEF567",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_ABCD1234EFGH",
      object: "event_action",
      name: "user.password_reset_requested"
    },
    target_id: "user_XYZ9876ABCD",
    target_name: "omar@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-02-15T08:45:22.123Z",
    metadata: {
      redirect: "/password-reset",
      description: "Password reset requested.",
      x_request_id: "req_ABCD5678EFGH"
    }
  },
  {
    id: "evt_2B345CDEFG678",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_DEFG2345HIJK",
      object: "event_action",
      name: "user.profile_updated"
    },
    target_id: "user_ABCD5678EFGH",
    target_name: "emma@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-03-20T17:55:10.987Z",
    metadata: {
      redirect: "/profile",
      description: "User profile updated.",
      x_request_id: "req_IJKL6789MNOP"
    }
  },
  {
    id: "evt_3C456DEFGH789",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_FGHI3456JKLM",
      object: "event_action",
      name: "user.subscription_created"
    },
    target_id: "user_GHIJ7890KLMN",
    target_name: "ziad@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-04-10T10:20:30.456Z",
    metadata: {
      redirect: "/subscription",
      description: "User subscription created.",
      x_request_id: "req_MNOP1234QRST"
    }
  },
  {
    id: "evt_4D567EFGHI890",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_HIJK4567LMNO",
      object: "event_action",
      name: "user.document_uploaded"
    },
    target_id: "user_IJKL8901MNOP",
    target_name: "david@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-05-05T14:00:45.678Z",
    metadata: {
      redirect: "/documents",
      description: "User document uploaded.",
      x_request_id: "req_STUV5678WXYZ"
    }
  },
  {
    id: "evt_5E678FGHIJ012",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_IJKL5678MNOP",
      object: "event_action",
      name: "user.payment_received"
    },
    target_id: "user_MNOP2345QRST",
    target_name: "youssef@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-06-15T09:30:18.901Z",
    metadata: {
      redirect: "/payments",
      description: "Payment received.",
      x_request_id: "req_ABCD1234EFGH"
    }
  },
  {
    id: "evt_6F789GHIJ123",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_JKLM6789NOPQ",
      object: "event_action",
      name: "user.item_purchased"
    },
    target_id: "user_NOPQ3456RSTU",
    target_name: "julia@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-07-20T11:11:11.111Z",
    metadata: {
      redirect: "/store",
      description: "User item purchased.",
      x_request_id: "req_EFGH5678IJKL"
    }
  },
  {
    id: "evt_7G890HIJK234",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_KLMN7890OPQR",
      object: "event_action",
      name: "user.comment_posted"
    },
    target_id: "user_OPQR4567STUV",
    target_name: "sarah@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-08-25T15:45:30.345Z",
    metadata: {
      redirect: "/comments",
      description: "User comment posted.",
      x_request_id: "req_WXYZ1234ABCD"
    }
  },
  {
    id: "evt_8H901IJKL345",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_LMNO8901PQRS",
      object: "event_action",
      name: "user.task_completed"
    },
    target_id: "user_PQRS5678TUVW",
    target_name: "michael@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-09-10T18:00:00.000Z",
    metadata: {
      redirect: "/tasks",
      description: "User task completed.",
      x_request_id: "req_YZAB5678CDEF"
    }
  }
]
