export function docSelection(
  //@ts-expect-error ---
  ArrDocs: QueryDocumentSnapshot<DocumentData, DocumentData>[],
  SearchDoc: string
): object {
  const docData: object[] = [];
  let docId: string = "none";
  for (let i = 0; i < ArrDocs.length; i++) {
    if (ArrDocs[i].id === SearchDoc) {
      docId = ArrDocs[i].id;
      docData.push(ArrDocs[i].data());
    }
  }
  console.log("docSelection выбрал документ: " + docId);
  return docData[0];
}
