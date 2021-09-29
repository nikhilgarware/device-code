import moment from "moment";

export function modifiedJson(details) {
  const Test = JSON.parse(details);
  const final = [];
  Object.keys(Test).forEach(function (key) {
    const data = {
      name: key,
      subMeterId: Test[key].sub_meter_id,
      timStamp: moment.unix(Test[key].latest_timestamp).format("llll"),
      deviceAuthUser: Test[key].device_auth_user,
      status: String(Test[key].device_status),
    };
    final.push(data);
  });
  return final;
}
