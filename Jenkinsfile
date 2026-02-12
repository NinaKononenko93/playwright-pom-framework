pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.42.1-jammy'
      args  '--ipc=host'
    }
  }

  options {
    timestamps()
    ansiColor('xterm')
  }

  stages {
    stage('Install') {
      steps {
        sh 'node -v && npm -v'
        sh 'npm ci'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npx playwright test --project=chromium'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**,test-results/**', allowEmptyArchive: true
      junit 'test-results/**/*.xml'
    }
  }
}
