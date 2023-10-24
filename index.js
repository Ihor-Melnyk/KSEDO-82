function onChangeProject() {
  var Project = EdocsApi.getAttributeValue("Project").text;
  if (Project) {
    EdocsApi.setAttributeValue({ code: "Project", value: Project, text: null });
  } else {
    EdocsApi.setAttributeValue({
      code: "Project",
      value: null,
      text: null,
    });
  }
}
