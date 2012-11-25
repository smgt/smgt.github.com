desc "Publish"
task :publish do
  FileUtils.rm_r('html') if File.exist?('html')

  sh "middleman build"

  File.open("build/CNAME", 'w+') do |f|
    f.puts("smgt.me")
  end

  sh "touch build/.nojekyll"

  ENV['GIT_DIR'] = File.expand_path(`git rev-parse --git-dir`.chomp)
  old_sha = `git rev-parse refs/remotes/origin/master`.chomp
  Dir.chdir('build') do
    ENV['GIT_INDEX_FILE'] = gif = '/tmp/dev.gh.i'
    ENV['GIT_WORK_TREE'] = Dir.pwd
    File.unlink(gif) if File.file?(gif)
    `git add -A`
    tsha = `git write-tree`.strip
    puts "Created tree   #{tsha}"
    if old_sha.size == 40
      csha = `echo 'boom' | git commit-tree #{tsha} -p #{old_sha}`.strip
    else
      csha = `echo 'boom' | git commit-tree #{tsha}`.strip
    end
    puts "Created commit #{csha}"
    puts `git show #{csha} --stat`
    puts "Updating master from #{old_sha}"
    `git update-ref refs/heads/master #{csha}`
    `git push origin master`
  end
end