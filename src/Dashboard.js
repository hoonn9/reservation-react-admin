import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { globalText } from "./GlobalText";

export default () => (
  <Card>
    <CardHeader
      title={`${globalText.text_company_name} 관리자님 환영합니다.`}
    />
    <CardContent>{"행복한 시간 되세요."}</CardContent>
  </Card>
);
