import { LoadAutorization } from "./LoadAutorization";

const autorization = new LoadAutorization();
//autorization.Header();
autorization.DocumentData();
autorization.RepresentationData();
autorization.DocumentTitle();
autorization.DriverData();
autorization.ProprietaryData();
autorization.ClientData();
autorization.ItemsTable();
autorization.Observation();
autorization.Message();
autorization.Signature();
autorization.Output('F', `testReport.pdf`);
