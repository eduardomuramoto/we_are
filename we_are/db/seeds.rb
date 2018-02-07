PASSWORD = 'supersecret'


User.destroy_all

jon_user = User.create(
  first_name: 'Jon',
  last_name: 'Snow',
  email: 'js@winterfell.gov',
  password: PASSWORD,
  # is_admin: false
)

super_user = User.create(
  first_name: 'Eduardo',
  last_name: 'Muramoto',
  email: 'em@gmail.com',
  password: PASSWORD,
  # is_admin: true
)

10.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

puts Cowsay.say("Created #{users.count} users", :tux)

puts Cowsay.say("Login as admin with #{super_user.email} and password of '#{PASSWORD}'!",:tux)
puts Cowsay.say("Login as normal user with #{jon_user.email} and password of '#{PASSWORD}'!",:tux)
