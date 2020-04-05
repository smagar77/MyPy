pipeline {
  agent any
  stages {
    stage('initial step') {
      steps {
        git(url: 'https://github.com/smagar77/MyPy.git', branch: 'master', poll: true, changelog: true)
      }
    }

  }
}