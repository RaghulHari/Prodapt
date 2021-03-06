package com.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.model.Admin;
import com.login.model.User;
import com.login.repository.CrudRepo;
import com.login.service.RegistrationServices;

@RestController
public class RegistrationController {

	@Autowired
	private  RegistrationServices service;
	
	
	@GetMapping("/users")
	@CrossOrigin(origins = "http://localhost:4401")
	public List<User> getUsers(){		
		return service.getAllUsers();
	}
	
	@GetMapping("/users/{emailId}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User getById(@PathVariable("emailId") String emailId){
		return service.getUserById(emailId);
	}
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4401")	
	public User registerUser(@RequestBody User user) throws Exception {
		
		String tempEmailId=user.getEmailId();
		String tempPhoneNo=user.getPhoneNo();
		if(tempPhoneNo !=null && !"".equals(tempPhoneNo)) {
			User userObj1=service.fetchUserByPhone(tempPhoneNo);
			if(userObj1!=null)
			{
				throw new Exception("user with"+tempPhoneNo+"is already exists");
			}
		}
		
		if(tempEmailId !=null && !"".equals(tempEmailId)) {
		User userobj=	service.fetchUserByEmailid(tempEmailId);
		if(userobj !=null) {
			throw new Exception("User with "+tempEmailId+"is already exists");
		}
	}
	
	
	
		User userObj=null;
		userObj=service.saveUser(user);
		return userObj;
		
	}	
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4401")

	public User loginUser(@RequestBody User user) throws Exception {
		
		String tempEmail=user.getEmailId();
		String tempPass=user.getPassword();
		User userObj=null;
		if(tempEmail !=null && tempPass != null) {
			userObj=service.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credintials");
		}
		
		return userObj;
		

	}	
	
	
	
	@PostMapping("/loginadmin")
	@CrossOrigin(origins = "http://localhost:4401")

	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
	String tempEmailId	=admin.getEmailId();
	String tempPass		=admin.getPassword();
		Admin userObj=null;
			if(tempEmailId !=null && tempPass !=null) 
			{
				userObj=service.fetchAdminByEmailIdAndPassword(tempEmailId,tempPass);
			}
	if(userObj == null)
	{
			throw new Exception("Bad credentials username and paswword miss match ");
	}
		return userObj;
	
	}
	
	@DeleteMapping("/removeuser/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public void deleteUser(@PathVariable("id") Integer id)  {		
		service.deleteUserById(id);	
	}
	
	@PutMapping("/update/{id}")
	@CrossOrigin(origins = "http://localhost:4401")
	public User updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
		String newPass=user.getPassword();
		return service.upUser(id, newPass);
	}
}
